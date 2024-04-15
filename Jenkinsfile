pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                withNPM(npmrcConfig:'my-custom-npmrc') {
                sh 'npm install'
        }
            }

        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}