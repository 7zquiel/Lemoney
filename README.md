Meu primeiro projeto em React Native. O projeto se trata de um aplicativo de controle financeiro pessoal.

O principal objetivo do projeto é adquirir conhecimentos nas seguintes tecnologias:

 * React Native e suas bibliotecas
 * SQL
 * PostgreSQL
 * Sequelize
 * Node.js
 * Git e Github

 Comandos Git

 * Configuração:

   git config --global user.name "Agustín Chaves"
   git config --global user.email "agus7in351@gmail.com"
   git config --golbal core.editor vscode

 * Consulta: 

   git config --list
   git config user.name
   git config user.email
   git config core.editor

 * Comandos:

   git init                                //creates a new repository
   git add <file>                          //adds a file to the staging area
   git add -A ou git add .                 //adds all files to the staging area
   git log                                 //shows the history of all the commits
   git restore <file>                      //goes back to the last commit and erase all modifications made after that
   git reset --soft/mixed/hard <id.commit> //goes back to a specific commit
   git commit -m "message"                 //the changes made that are in the staging area are saved in the git repository
   git status                              //shows the current state of the Git working directory and staging area

   git branch                              //shows all the branches in the directory
   git branch <branch.name>                //creates a new branch
   git checkout <branch.name>              //navigates to a branch