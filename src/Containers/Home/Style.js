import styled from 'styled-components'
import media from '../../Helpers/MediaQueries'

const AppHolder = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const TodoListHolder = styled.div`
`

const TitleApp = styled.h1`
    color: #8C0C04;
    font-weight: 500;
    font-size: 30px;
    height: 15vh;
    justify-content: center;
    display: flex;
    align-items: center;

    ${ media.tablet`
        height: 10vh;
    ` }
`

const TodoList = styled.ul`
    overflow: auto;
    max-height: 75vh;
    list-style: none;
    max-width: 800px;
    margin: 0 auto;
    background-color: #FFF;
    box-shadow: 0 0px 22px -8px rgba(0,0,0,0.25);
    padding: 0;

    ${ media.tablet`
        max-height: 85vh;
    ` }
`

const LinkHolder = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background-color: #0F0;
    height: 10vh;
    background: rgb(0,224,179);
    background: -moz-linear-gradient(left, rgba(0,224,179,1) 0%, rgba(44,221,124,1) 100%);
    background: -webkit-linear-gradient(left, rgba(0,224,179,1) 0%,rgba(44,221,124,1) 100%);
    background: linear-gradient(to right, rgba(0,224,179,1) 0%,rgba(44,221,124,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00e0b3', endColorstr='#2cdd7c',GradientType=1 );
    transition: all .5s ease-in-out;

    a
    {
        line-height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        display: block;
        width: 100%;
        height: 100%;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        text-decoration: none;
    }

    ${ media.tablet`
        max-height: 5vh;

        a
        {
            line-height: 5vh;
        }
    ` }
`

export { AppHolder, TodoListHolder, TitleApp, TodoList, LinkHolder }