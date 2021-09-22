let html = ''

function mainPage(){ 
    html = /*html*/ `
        <div class="grid-container">

            <div class="item1">
                <a target="_blank" href="https://twitter.com"><svg style="width:2em;height:2em;position:fixed;top:1em;left:54em;opacity:.8;" viewBox="0 0 24 24"><path fill="#fff" d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" /></svg></a>

                <div class="topnav">
                <a class="active"></a>
                <a class="aTopNav" onclick="mainPage()" href="#home">HOME</a>
                <a class="aTopNav" onclick="Discover()" href="#discover">DISCOVER</a>
                <a class="aTopNav" onclick="Experience()" href="#experience">EXPERIENCES</a>
                <a class="aTopNav" onclick="Gallery()" href="#gallery">GALLERY</a>
                <a class="aTopNav" onclick="FindUs()" href="#find us">FIND US</a>

                     
                    </div>
                    <h1 class="Disc"> Discover </h1>
                    <h2 class="The"> The </h2>
                    <h1 class="Poss"> Possibilities </h1>
                    <br>
                    <div class="item7">
                    <button onclick="ExploreBtn();" style="--content:'EXPLORE NOW';"href="">

                        <div class="left"></div>
                        EXPLORE NOW
                        <div class="right"></div>

                    </button>
                </div>
                

            </div>

        </div>

            <div class="item2"></div>

            <div class="item4"></div>


        <div class="" id="ExploreBtn">
        </div>
    `;
    show();
}


mainPage();

show()
function show() {
    document.getElementById('page').innerHTML = html;
}


function ExploreBtn(){
    html = /*html*/ `

    <div class="grid-container">

    <div class="item2">

        <a target="_blank" href="https://twitter.com"><svg style="width:2em;height:2em;position:fixed;top:1em;left:54em;opacity:.8;" 
        viewBox="0 0 24 24"><path fill="#fff" 
        d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 
        17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 
        16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 
        6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 
        6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18
         7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 
         8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 
        0 0,1 12,2Z" /></svg></a>

        <div class="topnavX">

        <a class="active"></a>
        <a class="aTopNav" onclick="mainPage()" href="#home">HOME</a>
        <a class="aTopNav" onclick="Discover()" href="#discover">DISCOVER</a>
        <a class="aTopNav" onclick="Experience()" href="#experience">EXPERIENCES</a>
        <a class="aTopNav" onclick="Gallery()" href="#gallery">GALLERY</a>
        <a class="aTopNav" onclick="FindUs()" href="#find us">FIND US</a>
        
        </div>
`;
    show();
    
}

function Discover(){
    html = /*html*/ `

    <div class="grid-container">

        <div class="item3">

            <a target="_blank" href="https://twitter.com"><svg style="width:2em;height:2em;position:fixed;top:1em;left:54em;opacity:.8;" 
             viewBox="0 0 24 24"><path fill="#fff" 
             d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 
             17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 
             16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 
            6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 
            6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18
            7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 
            8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 
            0 0,1 12,2Z" /></svg></a>

            <div class="topnav">

                <a class="active"></a>

                <a class="aTopNav" onclick="mainPage()" href="#home">HOME</a>
                <a class="aTopNav" onclick="Discover()" href="#discover">DISCOVER</a>
                <a class="aTopNav" onclick="Experience()" href="#experience">EXPERIENCES</a>
                <a class="aTopNav" onclick="Gallery()" href="#gallery">GALLERY</a>
                <a class="aTopNav" onclick="FindUs()" href="#find us">FIND US</a>
            
            </div>
        </div>
    </div>
            
            `;
            show();
        }

function Experience(){
    html = /*html*/ `

    <div class="grid-container">

    <div class="item1">
        <a target="_blank" href="https://twitter.com"><svg style="width:2em;height:2em;position:fixed;top:1em;left:54em;opacity:.8;" 
        viewBox="0 0 24 24"><path fill="#fff" 
        d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 
        17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 
        16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 
        6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 
        6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18
         7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 
         8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 
        0 0,1 12,2Z" /></svg></a>

        <div class="topnav">

            <a class="active"></a>

            <a class="aTopNav" onclick="mainPage()" href="#home">HOME</a>
            <a class="aTopNav" onclick="Discover()" href="#discover">DISCOVER</a>
            <a class="aTopNav" onclick="Experience()" href="#experience">EXPERIENCES</a>
            <a class="aTopNav" onclick="Gallery()" href="#gallery">GALLERY</a>
            <a class="aTopNav" onclick="FindUs()" href="#find us">FIND US</a>
            </div>
            </div>
            </div>
`;
    show();
}

function Gallery(){
    html = /*html*/ `

    <div class="grid-container">

    <div class="item1">
    
    <a target="_blank" href="https://twitter.com"><svg style="width:2em;height:2em;position:fixed;top:1em;left:54em;opacity:.8;" 
    viewBox="0 0 24 24"><path fill="#fff" 
    d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 
    17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 
    16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 
    6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 
    6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18
    7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 
    8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 
    0 0,1 12,2Z" /></svg></a>
        
        <div class="topnav">

        <a class="active"></a>

            <a class="aTopNav" onclick="mainPage()" href="#home">HOME</a>
            <a class="aTopNav" onclick="Discover()" href="#discover">DISCOVER</a>
            <a class="aTopNav" onclick="Experience()" href="#experience">EXPERIENCES</a>
            <a class="aTopNav" onclick="Gallery()" href="#gallery">GALLERY</a>
            <a class="aTopNav" onclick="FindUs()" href="#find us">FIND US</a>
            </div>
            
</div>


            `;
            show();
}

function FindUs(){
    html = /*html*/ `

    <div class="grid-container">

    <div class="item1">

        <a target="_blank" href="https://twitter.com"><svg style="width:2em;height:2em;position:fixed;top:1em;left:54em;opacity:.8;" 
        viewBox="0 0 24 24"><path fill="#fff" 
        d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 
        17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 
        16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 
        6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 
        6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18
         7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 
         8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 
        0 0,1 12,2Z" /></svg></a>

        <div class="topnav">

            <a class="active"></a>

            <a class="aTopNav" onclick="mainPage()" href="#home">HOME</a>
            <a class="aTopNav" onclick="Discover()" href="#discover">DISCOVER</a>
            <a class="aTopNav" onclick="Experience()" href="#experience">EXPERIENCES</a>
            <a class="aTopNav" onclick="Gallery()" href="#gallery">GALLERY</a>
            <a class="aTopNav" onclick="FindUs()" href="#find us">FIND US</a>
            </div>
`;
    show();
}

