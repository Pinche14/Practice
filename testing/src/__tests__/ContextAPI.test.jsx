import {expect, it, describe} from 'vitest'
import {render,screen} from "@testing-library/react"
import ContextAPI from '../components/ContextAPI'
import userEvent from '@testing-library/user-event'

describe('ContextAPI', () => {
    it('should render users', () => {
        const {container} = render(<ContextAPI/>);
        expect(container).toMatchSnapshot();
    })


    describe('Edit button' , () => {
        it('should render save button',async () => {
            render(<ContextAPI/>)
            const editButton = screen.getByRole('button', {name: 'Edit'});
            await userEvent.click(editButton)
            const saveButton = screen.getByRole('button', {name: "Save"});
            expect(saveButton).toBeInTheDocument();
        })
        it('should display username & email input fields when button is clicked',async () => {
            render(<ContextAPI/>)
            const render = screen.getByRole('button', {name: "Edit"});
            await userEvent.click(editButton)
        })
    
    })
})