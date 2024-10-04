pipeline {
    agent {
        docker { image 'cypress/base:latest' }
    }
    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/NicoleMunozT/BambooHR'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
    post {
        
        success {
            echo 'Tests pasaron correctamente'
        }
        failure {
            echo 'Tests fallaron'
        }
    }
}
