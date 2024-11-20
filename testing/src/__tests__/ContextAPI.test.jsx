import {expect, it, describe} from 'vitest'
import {render,screen} from "@testing-library/react"
import ContextAPI from '../components/ContextAPI'

describe('ContextAPI', () => {
    it('should render users', () => {
        render(<ContextAPI/>);
    })
})