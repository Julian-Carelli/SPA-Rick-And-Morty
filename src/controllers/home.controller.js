import {getData} from '../utils/getData'

export default async () => {
    const characters = await getData()
    const view = `
        <div class="characters">
            ${characters.results.map( character => `
                <article class="characters__presentation">
                    <a href="#/${character.id}">
                        <img src="${character.image} " alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                 </article>
            `).join('')}
        </div>
    `
    return view
}