import { render, screen } from "@testing-library/react";
import { MessageI } from "../../types/Message";
import Message from "./Message";

describe('message component', () => {
    it('message render', async () => {
        const message: MessageI = {
            id: '1',
            socketId: '39',
            body: 'message',
            isFrom: true
        }
        render(<Message message={message} />)
        const element = await screen.findByRole('paragraph')
        expect(element.textContent).toBe('message')
    })
})