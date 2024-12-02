import { createFileRoute } from '@tanstack/react-router'
import ContactsPage from '~/pages/contacts/page'

export const Route = createFileRoute('/_pages/(tab-bar)/_tab-bar/contacts')({
  component: ContactsPage,
})