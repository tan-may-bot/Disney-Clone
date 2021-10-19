import React from 'react'
import styled from 'styled-components'


function Detail() {
    return (
        <Container>
                    <Background>
                        <img src="https://is5-ssl.mzstatic.com/image/thumb/Video114/v4/b8/47/14/b8471405-8fe3-0025-8349-24347f34a8c2/1443024733-WW-AMP_SF.lsr/1200x675.jpg"></img>
                    </Background>
                    {/* <ImageTitle>
                        <img src="https://pbs.twimg.com/media/EJNgi7cXYAExhC1.png"></img>
                    </ImageTitle> */}
                   

                    <Controls>
                            <PlayButton>
                                <img src="/images/play-icon-black.png"></img>
                                <span>PLAY</span>

                            </PlayButton>

                            <TrailerButton>

                                <img src="/images/play-icon-white.png"></img>
                                <span>TRAILER</span>

                            </TrailerButton>

                            <AddButton>


                            </AddButton>

                            <GroupWatchButton>

                            </GroupWatchButton>
                    </Controls>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height:calc(100vh - 70px);
padding: 0 calc(3.5vh + 5px);
position: relative;

`

const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`

const Controls = styled.div`
display: flex;
`
const PlayButton = styled.div`
    
    border: 1px solid black;
    border-radius: 4px;
    margin-left: 121px;
    margin-top: 500px;
    width: 84px;
    height: 45px;   
   span{
       z-index: +1;
   }
   
`
const TrailerButton = styled.div`
 margin-left: 10px;
    margin-top: 500px;
    width: 84px;
    height: 45px;  
`
const GroupWatchButton = styled.div`
`
const AddButton = styled.div`
`



