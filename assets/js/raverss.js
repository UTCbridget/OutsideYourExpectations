(function () {
    'use strict';
  
    const app = document.getElementsByClassName('utc-rave-alert')[0];
  
    const request = new XMLHttpRequest();
    request.open('GET', 'https://www.getrave.com/rss/utc/channel1', true);
    request.onload = function () {
  
  
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(this.response, "text/xml");
  
      // console.log(xmlDoc.getElementsByTagName('pubDate'));
      if (request.status >= 200 && request.status < 400) {
  
        if (xmlDoc.getElementsByTagName('title')[1]['textContent'] !== 'No emergencies at this time') {
  
          const container = document.createElement('div');
          container.setAttribute('class', 'bg-red-600 p-12');
          app.appendChild(container);
  
          const h2 = document.createElement('h2');
          h2.setAttribute('class', 'text-white');
          h2.textContent = xmlDoc.getElementsByTagName('title')[1]['textContent'];
          container.appendChild(h2);
  
          const p = document.createElement('p');
          p.setAttribute('class', 'text-white');
          p.textContent = xmlDoc.getElementsByTagName('description')[1]['textContent'];
          container.appendChild(p);
  
          const date = document.createElement('p');
          date.setAttribute('class', 'text-white pb-4');
          date.textContent = xmlDoc.getElementsByTagName('pubDate')[0]['textContent'];
          container.appendChild(date);
  
          if (xmlDoc.getElementsByTagName('link')[1]['textContent'] !== "https://www.utc.edu/about/emergency-preparedness.php" || xmlDoc.getElementsByTagName('link')[1]['textContent'] === " ") {
            const button = document.createElement('button');
            button.setAttribute('class', 'btn btn--navy-outline btn--regular');
            button.textContent = 'More information';
            button.onclick = function () {
              location.href = xmlDoc.getElementsByTagName('link')[1]['textContent'];
            };
            container.appendChild(button);
          }
  
        }
  
      }
      else {
        console.log('Could not load emergency RSS feed');
      }
    }
  
    request.send();
  })();