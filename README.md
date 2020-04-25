# Instructions

1. Run `npm i` to install the dependencies
2. Create a new branch
3. Download the questions using the command

```shell
npm run download <exercise-name>
```

4. Solve the question and create a Pull Request

## Note

- **One** question per Pull Request
- Each Pull Request should have code only related to that question
- If you have changes related to `babel` etc. please create a separate PR for that and merge it
********************************************************************************************
I have written some steps that might help new people to download exercises

STEPS to  downlaod exercise, resolve, run test case, create PR and download next exercise.

Instructions
1. Go to inside folder where you want to clone repository
2. Open command line not git base
3. git clone https://github.com/pesto-students/deep-dive-<username>.git
4. cd downloaded folder (cd deep-dive-username)
5. npm install   (Run npm i to install the dependencies) 
6. git checkout -b branchname  (Create a new branch)
7. npm run download <exercise-name> (Download the question using the command and exercise name like -> npm run download is-triangle )
8. cd folder (Go to js-exercise. This is inner folder of deep-dive-username and parent folder of is-triangle  ) 
9. npm install (Run npm i to install test library dependency like jest, babel, babel-jest)
10. Solve the question (Write code inside exercise-name file like isTriangle.js)
11. npm test    (Run test suites and test cases of this exercise)
12. commit changes 
13. push changes
14. create a Pull Request

   => For Next Exercise
 
15. cd.. (Go back to deep-dive-username folder. This is parent folder of js-exercise)
16. Reapeat step 6 to 14 

Note

-> One question per Pull Request

-> Each Pull Request should have code only related to that question

-> If you have changes related to babel etc. please create a separate PR for that and merge it


