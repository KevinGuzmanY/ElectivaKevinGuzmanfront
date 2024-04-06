pipeline {
    agent any

    stages {
        stage('Stop and Remove Docker Container') {
            steps {
                script {
                    bat 'docker stop nombre_contenedor || exit 0'
                    bat 'docker rm nombre_contenedor || exit 0'
                }
            }
        }
        stage('Docker') {
            steps {
                bat 'docker build -t nombre_imagen .'
                script {
                    bat 'docker run -d -p 8081:8081 --name nombre_contenedor nombre_imagen'
                }
            }
        }
    }
}
