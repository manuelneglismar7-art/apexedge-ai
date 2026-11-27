import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'apexedge-ai-gevfj88l',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_HhSuGtqxivDWFJRaZVfwkyFFAUXfe6m4',
  authRequired: false,
  auth: { mode: 'managed' },
})
