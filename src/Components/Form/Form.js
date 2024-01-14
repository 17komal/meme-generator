import React, { useEffect, useState } from 'react'

const Form = () => {
    const [styles, setStyle] = useState({
        'backgroundColor': '#000',
        'fontSize': 15

    });

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImg: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [memeData, setMemeData] = useState({})

    useEffect(() => {
        async function getImage() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json()
            setMemeData(data.data.memes)
        }
        getImage();
    }, [])

    const getRandomImage = () => {
        const random = Math.floor(Math.random() * memeData.length);
        const imgUrl = memeData[random].url;
        setMeme({
            topText: "",
            bottomText: "",
            memeImg: imgUrl
        })
    }

    const getColor = (e) => {
        const currentColor = e.target.value;
        setStyle(
            preStyle => ({
                ...preStyle,
                "backgroundColor": currentColor
            })
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeme(
            preMemeData => ({
                ...preMemeData,
                [name]: value
            })
        )
    }
  
    const topDiv = document.querySelector('#meme_text_top');
    let offsettopX, offsettopY;
    const handleTopEvent = (e) => {
     
        if(e. type == "mousedown")
        {
            offsettopX = e.clientX - topDiv.offsetLeft;
            offsettopY = e.clientY - topDiv.offsetTop;
        }
        else if(e.type == "mousemove")
        {
            topDiv.style.left = `${e.clientX -offsettopX}px`;
            topDiv.style.top =   `${e.clientY-offsettopY}px`;
        }
        else if(e.type == "touchstart")
        {
            offsetBottomX = e.clientX - topDiv.offsetLeft;
            offsetBottomY = e.clientY - topDiv.offsetTop;
        }
        else if(e.type == "touchmove")
        {
            topDiv.style.left = `${e.clientX -offsetBottomX}px`;
            topDiv.style.top =   `${e.clientY-offsetBottomY}px`;
        }
        else if(e.type == "mouseend")
        {
            topDiv.style.left = `${e.clientX -offsetBottomX}px`;
            topDiv.style.top =   `${e.clientY-offsetBottomY}px`;
        }
    }

    const bottomDiv = document.querySelector('#meme_text_bottom');
    let offsetBottomX, offsetBottomY;
    const handleBottomEvent = (e) => {
        
        if(e. type == "mousedown")
        {
            offsetBottomX = e.clientX - bottomDiv.offsetLeft;
            offsetBottomY = e.clientY - bottomDiv.offsetTop;
        }
        else if(e.type == "mousemove")
        {
            bottomDiv.style.left = `${e.clientX -offsetBottomX}px`;
            bottomDiv.style.top =   `${e.clientY-offsetBottomY}px`;
        }
        else if(e.type == "touchstart")
        {
            offsetBottomX = e.clientX - bottomDiv.offsetLeft;
            offsetBottomY = e.clientY - bottomDiv.offsetTop;
        }
        else if(e.type == "touchmove")
        {
            bottomDiv.style.left = `${e.clientX -offsetBottomX}px`;
            bottomDiv.style.top =   `${e.clientY-offsetBottomY}px`;
        }
    }

    return (
        <div>
            <form>
                <div className='row form_card justify-content-md-center'>
                    <div className="form-group col-md-5 form_field">
                        <input type="text" className="form-control" id="topText" name="topText" placeholder="Top Text" onChange={handleChange} value={meme.topText} />
                    </div>
                    <div className="form-group  col-md-5 form_field">
                        <input type="text" className="form-control " id="bottomText" name="bottomText" placeholder="Bottom Text" onChange={handleChange} value={meme.bottomText} />
                    </div>
                </div>

            </form>
            <div className='row form_card justify-content-md-center'>
                <div className="form-group  col-md-5 form_field">
                    <button type="button" className="btn btn-success col-md-12" onClick={getRandomImage} >Get Meme Image</button>
                </div>
                <div className='form-group  col-md-5 form_field container-color'>
                    <input type="color" id="color-picker" name="color-picker" className="form-control" onChange={getColor} />
                    <span id="value" className="color-picker-text">Get background color</span>
                </div>
            </div>
            <div className='row meme_img  justify-content-md-center' id="meme_img">

                <div className="meme-image col-md-5">
                    <img src={meme.memeImg} />
                    <div className='meme_text_top' id='meme_text_top' style={styles} onMouseDown={handleTopEvent} onMouseMove={handleTopEvent} onTouchMove={handleTopEvent} onTouchStart={handleTopEvent}>
                    {meme.topText}
                    </div>
                    <div className='meme_text_bottom' id='meme_text_bottom' style={styles}  onMouseDown={handleBottomEvent} onMouseMove={handleBottomEvent}  onTouchMove={handleBottomEvent} onTouchStart={handleBottomEvent}> {meme.bottomText} </div>
                </div>

            </div>
        </div>
    )
}

export default Form
