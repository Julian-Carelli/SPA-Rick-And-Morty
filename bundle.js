!function(i){var a={};function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return i[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=i,n.c=a,n.d=function(i,a,e){n.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:e})},n.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,a){if(1&a&&(i=n(i)),8&a)return i;if(4&a&&"object"==typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&a&&"string"!=typeof i)for(var s in i)n.d(e,s,function(a){return i[a]}.bind(null,s));return e},n.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(a,"a",a),a},n.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},n.p="",n(n.s=3)}([function(i,a,n){},function(i,a,n){},function(i,a,n){},function(i,a,n){"use strict";n.r(a);n(0);var e=new IntersectionObserver(i=>{i[0].intersectionRatio>0?i[0].target.style.animation="passing 4s forwards ease-out":i[0].target.style.none="none"});const s="https://rickandmortyapi.com/api/character/",t=async i=>{const a=i?`${s}${i}`:s,n=await fetch(a);try{return n.json()}catch(i){console.log("Error Fetch",i)}};const r=()=>{let i=window.location.hash,a=i.split("/").splice("")[1];if(parseInt(a)<21)return i};const o={home:async()=>`\n        <div class="characters">\n            ${(await t()).results.map(i=>`\n                <article class="characters__presentation">\n                    <a href="#/${i.id}">\n                        <img src="${i.image} " alt="${i.name}">\n                        <h2>${i.name}</h2>\n                    </a>\n                </article>\n            `).join("")}\n        </div>\n    `,about:()=>'\n        \n        <div class="About">\n\n            <div class="about__section1">\n                <div class="about__title">\n                    <h2>Que es Rick And Morty?</h2>\n                </div>\n                <div class="about__presentation">\n                    <figure>\n                        <img src="../assets/media/rickandmorty1.png" alt="rick And Morty 1">\n                        <img src="../assets/media/rickandmorty2.png" alt="Rick And Morty 2">\n                        <img src="../assets/media/rickandmorty3.png" alt="Rick And Morty 3">\n                        <img src="../assets/media/rickandmorty1.png" alt="Rick And Morty 4">\n                        <img src="../assets/media/rickandmorty2.png" alt="Rick And Morty 5">\n                    </figure>\n                </div>\n            </div>\n\n            <div class="about__section2">\n                <div class="about__decoration1" >\n                    <img src="../assets/media/rickandmortyfondo1.png" id="image1" alt="Rick And Morty">\n                </div>\n                <div class="about__text">\n                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.\n                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur.</p>\n                </div>\n                <div class="about__decoration2">\n                    <img src="../assets/media/rickandmortyfondo2.png" id="image2" alt="Rick And Morty">\n                </div>\n            </div>\n\n            <div class="about__section3">\n                <div class="about__presentation">\n                    <figure>\n                        <img src="../assets/media/samuraijack2.png">\n                        <img src="../assets/media/aquateenforce.png">\n                        <img src="../assets/media/samuraijack2.png">\n                        <img src="../assets/media/spaceghost2.png">\n                        <img src="../assets/media/aquateenforce.png">\n                    </figure>\n                </div>\n                <div class="about__title">\n                    <h2>Otros programas que emite Adult Swim.</h2>\n                </div>\n            </div>\n\n            <div class="about__section4">\n                <div class="about__cards">\n                    <div class="about__card">\n                        <div class="about__card--title">\n                            <h2>AquaTeen Force</h2>\n                        </div>\n                        <div class="about__card--img">\n                            <img src="../assets/media/aquateenforce.png" alt="AquaTeen Force">\n                        </div>\n                        <div class="about__card--text">\n                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>\n                            <span><a href="https://aqua-teen-hunger-force.fandom.com/wiki/Aqua_Teen_Hunger_Force">Mas informacion</a></span>\n                        </div>\n                    </div>\n\n                    <div class="about__card">\n                        <div class="about__card--title">\n                            <h2> Samurai Jack</h2>\n                        </div>\n                        <div class="about__card--img">\n                            <img src="../assets/media/samuraijack.png" alt="Samurai Jack">\n                        </div>\n                        <div class="about__card--text">\n                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>\n                            <span><a href="https://samuraijack.fandom.com/es/wiki/Samurai_Jack">Mas informacion</a></span>\n                        </div>\n                    </div>\n\n                    <div class="about__card">\n                        <div class="about__card--title">\n                            <h2>Space Ghost</h2>\n                        </div>\n                        <div class="about__card--img">\n                            <img src="../assets/media/spaceghost.png" alt="Space Ghost">\n                        </div>\n                        <div class="about__card--text">\n                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>\n                            <span><a href="https://spaceghost.fandom.com/wiki/Space_Ghost">Mas informacion</a></span>\n                        </div>\n                    </div>\n\n                    <div class="about__card">\n                        <div class="about__card--title">\n                            <h2>Family Guy</h2>\n                        </div>\n                        <div class="about__card--img">\n                            <img src="../assets/media/familyguy.png" alt="Family Guy">\n                        </div>\n                        <div class="about__card--text">\n                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>\n                            <span><a href="https://familyguy.fandom.com/wiki/Family_Guy">Mas informacion</a></span>\n                        </div>\n                    </div>\n                \n                    <div class="about__card">\n                        <div class="about__card--title">\n                            <h2>The Brak Show </h2>\n                        </div>\n                        <div class="about__card--img">\n                            <img src="../assets/media/thebrakshow.png" alt ="The Brak Show">\n                        </div>\n                        <div class="about__card--text">\n                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>\n                            <span><a href="https://cartoonnetwork.fandom.com/wiki/The_Brak_Show">Mas informacion</a></span>\n                        </div>\n                    </div>\n\n                    <div class="about__card">\n                        <div class="about__card--title">\n                            <h2>Bob\'s Burgers</h2>\n                        </div>\n                        <div class="about__card--img">\n                            <img src="../assets/media/bobburgers.png" alt="Bob\'s Burgers">\n                        </div>\n                        <div class="about__card--text">\n                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolores labore asperiores distinctio porro illum cupiditate dignissimos consequuntur nisi quas iste beatae nesciunt veniam molestias expedita provident corrupti ducimus consequatur</p>\n                            <span><a href="https://bobs-burgers.fandom.com/wiki/Bob%27s_Burgers_Wiki">Mas informacion</a></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n                        \n            <div class="about__section5">\n                <div class="about__title">\n                    <h2>Muchas gracias por haber llegado hasta aca, la api con la cual me base para sacar los datos de los personajes la puedes encontrar <a target="blank" href="https://rickandmortyapi.com/">aca</a></h2>\n                </div>\n                <div class="about__image">\n                    <img src="../assets/media/api.png" alt ="Api Rick And Morty">\n                </div>\n            </div>\n        </div>\n    ',character:async()=>{const i=r(),a=await i.slice(1).toLocaleLowerCase().split("/")[1]-1,n=(await t()).results[a];return`\n        <div class="character">\n            <article class="character__presentation">\n                <img src="${n.image}" alt="${n.name}">\n                <h2>${n.name}</h2>\n            </article>\n            <article class="character__description">\n                <h3>Status:<span>${n.status}</span></h3>\n                <h3>Episodes:<span>${n.episode.length}</span></h3>\n                <h3>Species:<span>${n.species}</span></h3>\n                <h3>Gender:<span>${n.gender}</span></h3>\n                <h3>Origin:<span>${n.origin.name}</span></h3>\n                <h3>Location:<span>${n.location.name}</span></h3>\n            </article>\n        </div>\n    `},error404:()=>'\n        <div class="error404">\n            <div class="error404__presentation">\n                <h2>Error 404</h2>\n            </div>\n            <div class="error404__text">\n                <p>The route wasn\'t find it</p>\n            </div>\n        </div>\n    ',presentation:()=>'\n    <div class="content__presentation">\n            <div id ="img" class="content__presentation--img">\n                <img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" alt="rickAndMorty">\n            </div>\n            <div class="content__presentation--text">\n                <h2>Pagina construida gracias a la Api de Rick And Morty</h2>\n                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni possimus voluptatem libero illo facere recusandae, id nostrum quo accusantium nesciunt vitae accusamus numquam rem tempore odit! Mollitia animi itaque rerum!\n                illo facere recusandae,\n                </p>\n                <div class="links">\n                    <a target="blank" href="https://www.instagram.com/juli.carelli_/"><i class="icon fab fa-instagram"></i></a>\n                    <a target="blank" href="https://github.com/tyty20?tab=repositories"><i class="icon fab fa-github"></i></a>\n                    <a target="blank" href="https://www.linkedin.com/in/julian-ignacio-carelli-8a85b9192/"><i class="icon fab fa-linkedin"></i></a>\n                </div> \n            </div>\n    </div>\n    '},c=document.getElementById("content");n(1),n(2);window.addEventListener("hashchange",()=>{(async i=>{const a=r();switch(c.innerHTML="",i){case"#/inicio":return c.innerHTML=await o.presentation();case"#/":return c.innerHTML=await o.home();case"#/about":return c.innerHTML=await o.about();case""+a:return c.innerHTML=await o.character();default:c.innerHTML=await o.error404()}})(window.location.hash)}),window.addEventListener("hashchange",()=>{const i="#/about"===window.location.hash?document.getElementById("image1"):null,a="#/about"===window.location.hash?document.getElementById("image2"):null;e.observe(i),e.observe(a)})}]);