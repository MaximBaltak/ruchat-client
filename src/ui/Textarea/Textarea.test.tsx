import { fireEvent, render, screen } from "@testing-library/react"
import { Textarea } from "./Textarea"

describe('Textarea component', () => {
        const text: string = 'hello'
        const change = jest.fn(() => { })
        const sendOnKey = jest.fn(() => {})
        const placeholder: string = 'сообщение'
        const width: string = '200px'
        const height: string = '40px'

    it('Textarea component render', async () => {
        
        render(<Textarea
            width={width}
            height={height}
            text={text}
            sendOnKey={sendOnKey}
            change={change}
            placeholder={placeholder} />)
        const textarea = await screen.findByRole('textbox')
        expect(textarea.style.width).toBe('200px')
        expect(textarea.textContent).toBe('hello')
    })
    it('Textarea component clickKey', async () => {
    
        render(<Textarea
            width={width}
            height={height}
            text={text}
            sendOnKey={sendOnKey}
            change={change}
            placeholder={placeholder} />)
        const textarea = await screen.findByRole('textbox')
        fireEvent.keyDown(textarea)
        fireEvent.keyDown(textarea)
        fireEvent.keyDown(textarea)
        expect(sendOnKey.mock.calls).toHaveLength(3)

    })
    it('Textarea component cnange', async () => {

        render(<Textarea
            width={width}
            height={height}
            text={text}
            sendOnKey={sendOnKey}
            change={change}
            placeholder={placeholder} />)
        const textarea = await screen.findByRole('textbox')
        await fireEvent.change(textarea,{target: {value: 'test'}})
        await fireEvent.change(textarea,{target: {value: 'test'}})
        await fireEvent.change(textarea,{target: {value: 'test'}})
        expect(change.mock.calls).toHaveLength(3)

    })
})