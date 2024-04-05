pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'ng build --prod'
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
