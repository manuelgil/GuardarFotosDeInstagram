pipeline {
  agent any
  stages {
    stage('deploy') {
      agent any
      steps {
        catchError() {
          sh 'cp -r * /var/www/html/dl-instagram'
          mail(subject: 'WEB SERVER - DEPLOY ERROR', body: 'Hey mister, an error has ocurred. Take a look please. I\'m sorry.', to: 'manuelyeixon@gmail.com', replyTo: 'yourfriend@gmail.com')
        }

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