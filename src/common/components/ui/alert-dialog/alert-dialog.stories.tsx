import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { AlertDialog } from './alert-dialog.component'
import { Button } from '../button'

const meta: Meta<typeof AlertDialogRoot> = {
    title: 'AlertDialog',
    component: AlertDialog,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
    render: (p) => (
        <AlertDialog {...p}>
            <AlertDialog.Trigger asChild>
                <Button variant="outline">Show Dialog</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
                <AlertDialog.Header>
                    <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                    <AlertDialog.Description>
                        This action cannot be undone
                    </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action>Continue</AlertDialog.Action>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog>
    ),
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('alert-dialog')

        expect(container).toBeTruthy()
    },
}
