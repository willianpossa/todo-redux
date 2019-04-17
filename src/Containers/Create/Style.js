import styled from 'styled-components'
import media from '../../Helpers/MediaQueries'

const AppHolder = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`

const TitleApp = styled.h1`
    color: #8C0C04;
    font-weight: 500;
    font-size: 30px;
    line-height: 60px;

    ${ media.tablet`
    ` }
`

const LinkHolder = styled.div`
    text-align: center;
    background-color: #FFF;
    height: 60px;
    position: relative;
    border-bottom: 2px solid #DDD;
    padding: 0 15px;

    a
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        padding-left: 15px;
        line-height: 60px;
        font-size: 22px;
        text-decoration: none;
        color: #ab0d0d;
    }

    ${ media.tablet`
    ` }
`

const FormHolder = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #FFF;
    box-shadow: 0 0px 22px -8px rgba(0,0,0,0.25);
    padding: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const FieldGroup = styled.div`
    flex: 0 0 40%;
    max-width: 40%;
    padding: 0 15px;

    &.inline-field
    {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        max-width: initial;

        > div
        {
            margin-right: 13px;
        }
        
        label
        {
            margin-bottom: 0;
        }
    }

    input[type=checkbox]
    {
        padding: 0;
    }
`

const FieldLabel = styled.label`
    display: block;
    font-weight: 300;
    color: #666;
    margin-bottom: 3px;
`

const CheckboxHolder = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
`

const CheckboxMarker = styled.span`
    background-color: #0ea70e;
    position: absolute;
    border-radius: 50%;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    transform: scale(0);
    transition: all .2s ease-in-out;
    opacity: 0;
`

const FieldInput = styled.input`
    appearance: none;
    width: 100%;
    border: 1px solid #444;
    color: #444;
    height: 30px;
    line-height: 30px;
    outline: none;
    padding: 0 15px;
    font-size: 14px;
    
    &:checked + span
    {
        transform: scale(1);
        opacity: 1;
    }
`

const Button = styled.button`
    flex: 0 0 20%;
    max-width: 20%;
    height: 30px;
    background-color: rgb(7, 187, 48);
    color: #FFF;
    text-transform: uppercase;
    border: 1px solid rgb(7, 187, 48);
    line-height: 24px;
    cursor: pointer;
    opacity: ${ props => props.visible ? '1' : '0' };
    transition: opacity .3s ease-in-out;
    outline: none;
`

export { 
    AppHolder, 
    FormHolder, 
    TitleApp, 
    LinkHolder,
    FieldGroup,
    FieldLabel,
    CheckboxHolder,
	CheckboxMarker,
    FieldInput,
    Button
}