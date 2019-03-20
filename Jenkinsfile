pipeline {
  agent any
  stages {
    stage('deploy') {
      agent any
      steps {
        sh '''mkdir -p /var/www/html/dl-instagram
cp -r * /var/www/html/dl-instagram'''
      }
    }
  }
}
