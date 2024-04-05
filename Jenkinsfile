pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'ng build --prod'
            }
        }

        stage('Docker') {
            steps {
                script {
                    dockerImage = docker.build("my-app:${env.BUILD_ID}")
                }
            }
        }
    }
}
