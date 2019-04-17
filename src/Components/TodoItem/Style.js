import styled from 'styled-components'
import media from '../../Helpers/MediaQueries'

const TodoHolder = styled.li`
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DDD;

    &:last-child
    {
        border-bottom: none;
    }
`

const CheckboxHolder = styled.div`
    display: inline-block;
    border-right: 1px solid #DDD;
    height: 50px;
    max-width: 50px;
    flex: 0 0 50px;
    position: relative;
`

const CheckboxMarker = styled.span`
    background-color: #0ea70e;
    position: absolute;
    border-radius: 50%;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    transform: scale(0);
    transition: all .2s ease-in-out;
    opacity: 0;
`

const TodoCheckbox = styled.input`
    appearance: none;

    &:checked + span
    {
        transform: scale(1);
        opacity: 1;
    }
`

const TodoLabel = styled.label`
    padding-left: 20px;
    display: inline-block;
    font-size: 16px;
    font-weight: 300;
    flex: 1;
    line-height: 50px;
    text-decoration: ${props => props.completed ? 'line-through' : '' };
    transition: all .3s ease-in-out;
`

const TodoRemove = styled.button`
    border: none;
    line-height: 49px;
    padding: 0 15px 0 15px;
    color: #a50c0c;
    background-color: #FFF;
    border-left: 1px solid #DDD;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover
    {
        color: #FFF;
        background-color: #a50c0c;
        border-left-color: #a50c0c;
    }
`

export {
    TodoHolder,
    CheckboxHolder,
    CheckboxMarker,
    TodoCheckbox,
    TodoLabel,
    TodoRemove
}