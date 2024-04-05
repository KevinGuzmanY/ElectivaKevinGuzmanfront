pipeline {
    agent any

    stages {

        stage('Docker') {
            steps {
              bat 'docker build -t nombre_imagen .'
              bat 'docker run -p 8081:8081 nombre_imagen'
            }
        }
}

}
