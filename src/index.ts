import { Application } from 'probot'

export = ({ app }: { app: Application }) => {
  app.on('issues.opened', async (context) => {
    const issueComment = context.issue({
      body: 'Thank you fellow Human for opening this issue.',
    })
    await context.github.issues.createComment(issueComment)
  })
  app.on('issue_comment.created', async (context) => {
    if (context.payload.issue.body !== 'Hey Robot') {
      return
    } else {
      const issueComment = context.issue({
        body: 'Thank you fellow Human. Your comment was successfully processed.',
      })
      await context.github.issues.createComment(issueComment)
    }
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
