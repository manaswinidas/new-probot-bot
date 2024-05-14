/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
export default (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue! We will look into this.",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  app.on("pull_request.opened", async (context) => {
    let { reviewers } = await context.config("auto_assign.yml");
    reviewers = reviewers.filter(
      (reviewer) => reviewer !== context.payload.sender.login
    );

    const params = context.pullRequest({ reviewers });
    return context.octokit.pulls.requestReviewers(params);
  });

  app.on("pull_request_review.submitted", async (context) => {
    if (context.payload.review.state === "approved") {
      const labelsParam = context.issue({ labels: ["approved"] });
      return context.octokit.issues.addLabels(labelsParam);
    }
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
