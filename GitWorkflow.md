## Feature Branches

Ocasionally ONLY do `git fetch` in case of any changes that have been made in the `main` branch.

### Example Git Workflow

When working on a feature, create a new branch

- `git checkout -b branch-name main`

Confirm you are in the correct branch

- `git branch`

From here, do whatever you want IE create files, edit code, etc

After all changes are made and you are ready to commit

- `git add . or filenames`
- `git commit -m 'descriptive message'`
- `git push -u origin branch-name`

Here go to GitHub.com and create a pull request

From here the code will be reviewed for any changes that need to be made and merged to the `main` branch.

Once the code has been reviewed/merged, delete the branch in your local repo

- `git branch -d branch-name`

When the branch is deleted and you're on the main branch, do `git fetch` and `git pull`

### Notes

Make sure you do not leave without creating a pull request as this will not let us see
any new progress or changes
