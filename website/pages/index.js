import Head from 'next/head'
import Cookies from 'universal-cookie';
import Link from 'next/link'
import Toast from 'awesome-toast';
import loadingIcon from '../public/loading.gif'

let isWelcomeTstShow = false;
let SB = null;

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
        // if(isWelcomeTstShow) return;//todo
        // if(cookies.get('WelcomeTst') !== undefined) return;
        // isWelcomeTstShow = true;
        Toast('Welcome to Awesome Toast! 👋', {
            position: 'top',
            timeout: 0,
            afterHide: () => {
                Toast('Click on code sections to run the demo', {
                    position: 'top',
                    afterHide: () => cookies.set('WelcomeTst', 'yes', { path: '/', maxAge: 1000*24*60*60 })
                });
            }
        });
    }, 2000);

    //render:
    return (
        <div id='window' style={{scrollBehavior:'smooth'}}>

            

        </div>
    )
}