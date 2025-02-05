import { defineRule } from './util'

export default function RuleDescriptiveLinkText() {
  return defineRule({
    test({ textContent, report }) {
      if (typeof textContent === 'undefined')
        return
      if (!textContent) {
        report({
          name: 'link-text',
          scope: 'warning',
          message: 'Should have descriptive text.',
          tip: 'Links with descriptive text are easier to understand for screen readers and search engines.',
        })
      }
      const uniformLinkText = textContent.trim().toLowerCase()
      const listOfBadDescriptiveLinkTexts = [
        'here',
        'this',
      ]
      if (listOfBadDescriptiveLinkTexts.includes(uniformLinkText)) {
        report({
          name: 'link-text',
          scope: 'warning',
          message: 'Should have descriptive text.',
          tip: `The ${textContent} descriptive text does not provide any context to the link.`,
        })
      }
    },
  })
}
