export default {
    start() {
        customElements.define('tab-search', class extends HTMLElement {
            connectedCallback() {
                this.innerHTML = ` 
                    <ion-header translucent>
                        <ion-toolbar>
                            <ion-title>Games</ion-title>
                        </ion-toolbar>
                    </ion-header>

                    <ion-content fullscreen class="ion-padding">
                        <h1 id="text">Games</h1>
                    </ion-content>`
                ;

                const h1s = document.querySelector("#text");
                h1s.innerHTML = "TESTE";
                
            }
        });
    }
}