pipeline {
    agent any

    stages {

        stage('Stop Docker Container') {
            steps {
                script {
                    bat 'docker stop nombre_contenedor || exit 0'
                }
            }
        }
        stage('Docker') {
            steps {
              bat 'docker build -t nombre_imagen .'
              bat 'docker run -p 8081:8081 nombre_imagen'
            }
        }
}

}
