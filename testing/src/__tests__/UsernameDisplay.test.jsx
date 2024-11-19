import {describe, it,test,expect} from 'vitest';
import {render,screen} from '@testing-library/react'
import UsernameDisplay from "../components/UsernameDisplay"

describe('UsernameDisplay', () => {
    it('should render username' , async() => {

        render(<UsernameDisplay username="Shubham"/>)


        //const result = render(<UsernameDisplay username="Shubham"/>);
        //expect(result.container).toMatchSnapshot();
        //const elements = screen.getAllByText("Shubham")
        //elements.forEach((element) => expect(element).toBeInTheDocument())
        //expect(screen.getByText("Shubham")).toBeInTheDocument();
        //screen.queryBy("Shubham")
        
        // let error;
        // try{
        //     screen.getByText("Shubham")
        // } catch(err){
        //     error = err
        // }
        // expect(err).toBeDefined()

        //expect(screen.queryByText('shubham')).toBeNull()
        //expect(screen.queryByText('shubham')).toBeInTheDocument()

        expect(
            await screen.findByText('Shubham' , {} , { timeout: 10000})
        ).toBeInTheDocument()
    })
})