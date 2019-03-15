pipeline {
  agent any
  stages {
    stage('deploy') {
      agent any
      steps {
        sh 'cp -r * /var/www/html/dl-instagram'
      }
    }
    stage('communicate deploy') {
      agent any
      steps {
        mail(subject: 'WEB SERVER - DEPLOY', body: 'Hello my friend, i just did a deploy, Greetings', to: 'manuelyeixon@gmail.com', replyTo: 'yourfriend@gmail.com')
      }
    }
  }
}
