var leftSide = document.getElementById('left-side'),
    rightSide = document.getElementById('right-side'),
    navArea = document.getElementById('navarea'),
    contentArea = document.getElementById('contentarea'),
    footerArea = document.getElementById('footerarea'),
    myNav = document.createElement('nav'),
    myUl = document.createElement('ul'),
    myLi1 = document.createElement('li'),
    myLi2 = document.createElement('li'),
    myLi3 = document.createElement('li'),
    myLi4 = document.createElement('li'),
    myLi5 = document.createElement('li'),
    myNavCodeText = '<div id="left-side"> <nav> <ul> <li>Home</li> <li>About US</li> <li>Portfolio</li> <li>FQA</li> <li>Contact</li> </ul> </nav> </div>',
    myContentCodeText = '<div id="content"> <img src="pics/pexels-photo-445109.jpeg"> </div>',
    myFooterCodeText = '<div id="footer"> <ul>  <li><i class="fa fa-facebook-square"></i></li>  <li><i class="fa fa-twitter-square"></i></li>  <li><i class="fa fa-behance-square"></i></li>  <li><i class="fa fa-linkedin-square"></i></li>  </ul> </div>',
    myContentTag = document.createElement('div'),
    myImg = document.createElement('img'),
    myFooterDiv = document.createElement('div'),
    footerUl = document.createElement('ul'),
    footerUlLi1 = document.createElement('li'),
    footerUlLi2 = document.createElement('li'),
    footerUlLi3 = document.createElement('li'),
    footerUlLi4 = document.createElement('li'),
    myI1 = document.createElement('i'),
    myI2 = document.createElement('i'),
    myI3 = document.createElement('i'),
    myI4 = document.createElement('i'),
    i = 0,
    a = 0,
    b = 0;


myLi1.textContent = 'Home';
myLi2.textContent = 'About US';
myLi3.textContent = 'Portfolio';
myLi4.textContent = 'FQA';
myLi5.textContent = 'Contact';

window.onload = function () {
    'use strict';
    
    var navInterval = setInterval(function () {
        
        navArea.textContent += myNavCodeText[i];
        i = i + 1;
        if (i >= myNavCodeText.length) {
             
            clearInterval(navInterval);
            rightSide.appendChild(myNav);
            myNav.appendChild(myUl);
            myUl.appendChild(myLi1);
            myUl.appendChild(myLi2);
            myUl.appendChild(myLi3);
            myUl.appendChild(myLi4);
            myUl.appendChild(myLi5);
            
            var contentInterval = setInterval(function () {
                
                contentArea.textContent += myContentCodeText[a];
                a = a + 1;
                
                if (a >= myContentCodeText.length) {
                    
                    clearInterval(contentInterval);
                    rightSide.appendChild(myContentTag);
                    myContentTag.setAttribute('id', 'content');
                    myContentTag.appendChild(myImg);
                    myImg.setAttribute('src', 'pics/pexels-photo-445109.jpeg');
                    
                    
                    var footerInterval = setInterval(function () {
                        
                        footerArea.textContent += myFooterCodeText[b];
                        b = b + 1;
                        
                        if (b >= myFooterCodeText.length) {
                            
                            clearInterval(footerInterval);
                            rightSide.appendChild(myFooterDiv);
                            myFooterDiv.setAttribute('id', 'footer');
                            myFooterDiv.appendChild(footerUl);
                            footerUl.appendChild(footerUlLi1);
                            footerUlLi1.appendChild(myI1);
                            myI1.setAttribute('class', 'fa');
                            myI1.classList.add('fa-facebook-square');
                            footerUl.appendChild(footerUlLi2);
                            footerUlLi2.appendChild(myI2);
                            myI2.setAttribute('class', 'fa');
                            myI2.classList.add('fa-twitter-square');
                            footerUl.appendChild(footerUlLi3);
                            footerUlLi3.appendChild(myI3);
                            myI3.setAttribute('class', 'fa');
                            myI3.classList.add('fa-behance-square');
                            footerUl.appendChild(footerUlLi4);
                            footerUlLi4.appendChild(myI4);
                            myI4.setAttribute('class', 'fa');
                            myI4.classList.add('fa-linkedin-square');
                            
                        }
                        
                    }, 150);
                    
                    
                }
                    
            }, 150);
            
            
        }
        
    }, 150);
    
};

    
    







