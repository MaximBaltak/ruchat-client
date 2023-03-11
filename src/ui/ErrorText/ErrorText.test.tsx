import { render, screen } from "@testing-library/react"
import {ErrorText} from './ErrorText'
const text: string = 'error'
const fontSize: string = '20px'

describe('test ErrorText component', () => {
    it('render ErrorText component', () => {
        render(<ErrorText text={text} fontSize={fontSize}/>)
        const textElement: HTMLElement = screen.getByRole('paragraph')
        expect(textElement.style.fontSize).toBe(fontSize)
        expect(textElement.textContent).toBe(text)
    })
})