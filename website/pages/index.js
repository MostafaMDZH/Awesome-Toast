import Head from 'next/head'
import Cookies from 'universal-cookie';
import Link from 'next/link'
import Toast from 'awesome-toast-component';

let isWelcomeTstShow = false;
let Tst = null;

export default function Main(){

    //copyTextToClipboard:
	const copyTextToClipboard = (text) => {
		if(!navigator.clipboard){
			fallbackCopyTextToClipboard(text);
		}else{
			navigator.clipboard.writeText(text).then(function(){
                Toast('Copied to clipboard 👍');
			},function(err){
                Toast('cannot copy 👎');
			});
		}
	}

	//fallbackCopyTextToClipboard:
	const fallbackCopyTextToClipboard = (text) => {
		let textArea = document.createElement("textarea");
		textArea.value			= text;
		textArea.style.top		= "0";//avoid scrolling to bottom:
		textArea.style.left		= "0";
		textArea.style.position	= "fixed";
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		try{
			document.execCommand('copy');
            Toast('Copied to clipboard');
		}catch(err){
            Toast('cannot copy');
		}
		document.body.removeChild(textArea);
	}

    //welcome toast:
    const cookies = new Cookies();
    setTimeout(() => {
        if(isWelcomeTstShow) return;
        if(cookies.get('WelcomeTst') !== undefined) return;
        isWelcomeTstShow = true;
        Toast('Welcome to Awesome Toast! 👋', {
            position: 'top',
            timeout: 3000,
            theme: 'light',
            afterHide: () => {
                Toast('Click on code sections to run the demo', {
                    position: 'top',
                    theme: 'light',
                    waitForEvent: true,
                    afterHide: () => cookies.set('WelcomeTst', 'yes', { path: '/', maxAge: 1000*24*60*60 })
                });
            }
        });
    }, 2000);

    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>

            <Head>
                <title>Awesome Toast | React, Javascript, and Typescript compatible toast</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* header */}
            <header id='header'>
                <Link href='/'><a className='headerLink'>Awesome Components</a></Link>
                <Link href='https://www.buymeacoffee.com/mostafamdzh'><a className='headerLink' id='coffee'>buy me a coffee! :)</a></Link>
            </header>

            <div id='container'>

                <div id='main'>

                    {/* navigation */}
                    <div id='navigation'>
                        <div id='navigationWrapper'>
                            <a className='navLink' href='#installation'  >installation  </a>
                            <a className='navLink' href='#position'      >position      </a>
                            <a className='navLink' href='#theme'         >theme         </a>
                            <a className='navLink' href='#custom-style'  >custom style  </a>
                            <a className='navLink' href='#timing'        >timing        </a>
                            <a className='navLink' href='#wait-for-event'>wait for event</a>
                            <a className='navLink' href='#update-on-fly' >update on fly </a>
                            <a className='navLink' href='#after-hide'    >after hide    </a>
                        </div>
                    </div>

                    {/* content */}
                    <div id='content'>

                        <a href='https://github.com/MostafaMDZH/Awesome-Toast' id='github'>Github</a>

                        {/* intro */}
                        <h3 id='awesome'><Link href='/'>Awesome</Link></h3>
                        <div id='name-versionWrapper'>
                            <h1 id='toast'><Link href='/'>Toast</Link></h1>
                            <a id='version'>V1.0.0</a>
                        </div>
                        <p id='description'>React, Javascript, and Typescript compatible toast</p>

                        {/* installation */}
                        <h3 className='sectionName' id='installation'><a href='#installation'># Installation</a></h3>
                        <p className='step'><a className='bold'>{'>'} step 1 : </a>you can use either npm or yarn, or import the main file with the script tag</p>
                        <div className='codeWrapper'>
                            <p className='comment'># npm</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('npm i awesome-toast-component')}>
                                <p>npm i <span>awesome-toast-component</span></p>
                            </button>
                            <p className='comment'># yarn</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('yarn add awesome-toast-component')}>
                                <p>yarn add <span>awesome-toast-component</span></p>
                            </button>
                            <p className='comment'>
                                # html (download the toast.js file from the&nbsp;
                                <a href='https://github.com/MostafaMDZH/Awesome-Toast/tree/main/src'>src</a>
                                &nbsp;directory)
                            </p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('<script src="toast.js"></script>')}>
                                <p>{"<script src=\""}<span>toast.js</span>{"\"></script>"}</p>
                            </button>
                        </div>
                        <p className='step'><a className='bold'>{'>'} step 2 : </a>include the package in your code</p>
                        <div className='codeWrapper'>
                            <p className='comment'># npm and yarn</p>
                            <button className='codeSection copyable' onClick={()=>copyTextToClipboard('import Toast from \'awesome-toast-component\'')}>
                                <p>import <span>Toast</span> from <span>&apos;awesome-toast-component&apos;</span></p>
                            </button>
                        </div>
                        <p className='step'><a className='bold'>{'>'} step 3 : </a>start making toasts!</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable' onClick={()=>Toast('Hello World! 👋')}>
                                <p><span>Toast</span>(&apos;Hello world! 👋&apos;);</p>
                            </button>
                        </div>

                        {/* position */}
                        <h3 className='sectionName' id='position'><a href='#position'># Position</a></h3>
                        <p className='sectionDescription'>You can position the toast by setting the position parameter</p>
                        <div className='codeWrapper'>
                            <p className='comment'># bottom(default)</p>
                            <button className='codeSection executable'
                                onClick={() => Toast(`I'm at the bottom`, { position: 'bottom' })}>
                                <p>
                                    {"Toast(`I'm at the bottom`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'bottom'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># top</p>
                            <button className='codeSection executable'
                                onClick={() => Toast(`I'm at the top`, { position: 'top' })}>
                                <p>
                                    {"Toast(`I'm at the top`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"position: 'top'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* theme */}
                        <h3 className='sectionName' id='theme'><a href='#theme'># Theme</a></h3>
                        <p className='sectionDescription'>The default theme is dark but you can enable the light theme with the theme parameter</p>
                        <div className='codeWrapper'>
                            <p className='comment'># the default theme is dark</p>
                            <button className='codeSection executable'
                                onClick={() => Toast(`Today is sunday!`, { theme: 'light'})}>
                                <p>
                                    {"Toast(`Today is sunday!`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"theme: 'light'"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* custom style */}
                        <h3 className='sectionName' id='custom-style'><a href='#custom-style'># Custom Style</a></h3>
                        <p className='sectionDescription'>The DOM layer in Awesome Toast is equivalent to below</p>
                        <div className='codeWrapper'>
                            <button className='codeSection'>
                                <p>
                                    {"<div class='"}<span>{"container'"}</span>{">"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"<p class='"}<span>{"message'"}</span>{"></p>"}<br></br>
                                    {"</div>"}
                                </p>
                            </button>
                        </div>
                        <p className='sectionDescription'>So you can apply your custom style in a form of an array of classes</p>
                        <div className='codeWrapper'>
                            <p className='comment'># you can even add your custom layout (like the &apos;bold&apos; class below)</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Toast(`Your account has been <a class='bold'>removed!</a>`,{
                                        style: {
                                            container: [
                                                ['background-color', 'red']
                                            ],
                                            message: [
                                                ['color', '#eee']
                                            ],
                                            bold: [
                                                ['font-weight', 'bold']
                                            ]
                                        }
                                    });
                                }}>
                                <p>
                                    {"Toast(`Your account has been "}<span>{"<a class='bold'>"}</span>{"removed!"}<span>{"</a>"}</span>{"`, { "}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"style: {"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"container: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['background-color', 'red']"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"message: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['color', '#eee'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"bold: ["}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"['font-weight', 'bold'],"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"]"}</span><br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* timing */}
                        <h3 className='sectionName' id='timing'><a href='#timing'># Timing</a></h3>
                        <p className='sectionDescription'>The default timeout for hiding is 4 seconds but you can customize it with the timeout parameter.</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => Toast(`Give me a second please...`, { timeout: 1000 })}>
                                <p>
                                    {"Toast(`Give me a second please...`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"timeout: 1000"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        <p className='sectionDescription'>Or you can set the timeout to zero so the auto-hide would be disabled (hiding would be available with the hide() function)</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    if(Tst === null)
                                        Tst = Toast(`I'm not going anywhere!`, { timeout: 0 });
                                }}>
                                <p>
                                    {"let tst = Toast(`I'm not going anywhere!`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"timeout: 0"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                            <p className='comment'># click to hide</p>
                            <button className='codeSection executable'
                                onClick={() => {Tst?.hide(); Tst = null;}}>
                                <p><span>{"tst.hide();"}</span></p><br></br>
                            </button>
                        </div>

                        {/* wait-for-event */}
                        <h3 className='sectionName' id='wait-for-event'><a href='#wait-for-event'># Wait For Event</a></h3>
                        <p className='sectionDescription'>By default, a Toast doesn&apos;t wait for any user events to hide, but if you want to ensure that the user has seen your message, you can enable this feature with waitForEvent parameter, so until the user does not interact with the page, the Toast doesn&apos;t hide.</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    setTimeout(() => {
                                        Toast(`I'm not going to hide until an event happens`, { waitForEvent: true });
                                    }, 100);
                                }}>
                                <p>
                                    {"Toast(`I'm not going to hide until an event happens`), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"waitForEvent: true"}</span><br></br>
                                    {" });"}
                                </p>
                            </button>
                        </div>

                        {/* update on fly */}
                        <h3 className='sectionName' id='update-on-fly'><a href='#update-on-fly'># Update On Fly</a></h3>
                        <p className='sectionDescription'>If you store the returned object from the Toast() function, you can set some of its attributes after show</p>
                        <div className='codeWrapper'>
                            
                            <p className='comment'># create a simple toast</p>
                            <button className='codeSection executable'
                                onClick={() => {if(Tst === null) Tst = Toast(`I'm a simple toast`, { timeout: 0 });}}>
                                <p>{"let "}<span>tst</span>{" = Toast(`I'm a simple toast`), { timeout: 0 });"}</p>
                            </button>

                            <p className='comment'># update the text</p>
                            <button className='codeSection executable'
                                onClick={() => Tst?.setMessage('I can change my massage')}>
                                <p>{"tst."}<span>{"setMessage"}</span>{"('I can change my massage');"}</p><br></br>
                            </button>

                            <p className='comment'># change the position</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Tst?.setMessage('Or change my position!');
                                    Tst?.setPosition('top');
                                }}>
                                <p>{"tst."}<span>{"setPosition"}</span>{"('top');"}</p><br></br>
                            </button>

                            <p className='comment'># change the theme</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Tst?.setMessage('Or change my theme');
                                    Tst?.setTheme('light');
                                }}>
                                <p>{"tst."}<span>{"setTheme"}</span>{"('light');"}</p><br></br>
                            </button>

                            <p className='comment'># change the style</p>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Tst?.setMessage('Even the style!');
                                    Tst?.setStyle({
                                        container: [['background-color', '#072']],
                                        message: [['color', '#fd0']]
                                    });
                                }}>
                                <p>
                                    {"tst."}<span>{"setStyle"}</span>{"({"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"container: [['background-color', '#072']],"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;{"message: [['color', '#fd0']],"}<br></br>
                                    {"});"}
                                </p>
                            </button>

                            <p className='comment'># and hide</p>
                            <button className='codeSection executable'
                                onClick={() => {Tst?.hide(); Tst = null;}}>
                                <p>tst.<span>hide();</span></p>
                            </button>

                        </div>

                        {/* after hide */}
                        <h3 className='sectionName' id='after-hide'><a href='#after-hide'># After Hide</a></h3>
                        <p className='sectionDescription'>When the waitForEvent is set to true, the hide function is waiting for a user event to start hiding timeout, so it may not occur exactly after the specified timeout after toast creation, so if you want to run a function after your toast hides, you can use the afterHide parameter for it</p>
                        <div className='codeWrapper'>
                            <button className='codeSection executable'
                                onClick={() => {
                                    Toast('Marco...', {
                                        afterHide: () => Toast('Polo!')
                                    });
                                }}>
                                <p>
                                    {"Toast('Marco...'), {"}<br></br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span>{"afterHide"}</span>{": () => Toast('Polo!')"}<br></br>
                                    {"});"}
                                </p>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            {/* footer */}
            <footer id='footer'>
                <p>Made by <a href='https://github.com/MostafaMDZH'>Mostafa Mohammadzadeh</a></p>
                <p id='dash'>-</p>
                <p id='githubLink'>Source on <a href='https://github.com/MostafaMDZH/Awesome-Toast'>Github</a></p>
                <p id='awesomeComponents'>From <Link href='/'><a>Awesome Components</a></Link></p>
            </footer>

        </div>
    )
}