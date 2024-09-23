-- projects

INSERT INTO projects(title, description, image, details) VALUES 
('Portfólio', 'Projeto Full-Stack para apresentar minhas habilidades.', 'personalProject', 'Esse projeto foi feito com o objetivo de demonstrar minhas habilidades e como eu as uso no dia-a-dia. Projeto feito em TypeScript, React, Remix e TailwindCSS, sempre estou atulizando e aplicando as melhores praticas de programacao.'), 
('Listify', 'Projeto Full-Stack para organização e tasks.', 'listifyProject', 'Projeto feito com o objetivo em ajudar as pessoas com a organização de simples tasks diarias. Feito com TypeScript, React, Node, Remix, TailwindCSS e SupaBase.'),
('Nyako-Store', 'Projeto Full-Stack de lojinha virtual.', 'nyakoStore', 'Projeto ainda em processo de desenvolvimento UI.');

-- experience

INSERT INTO experiences(company, position, duration, description) VALUES 
('Autônomo', 'Software Engineer', 'Jan 2022 - Present', ' Implementa novos recursos usando React e TypeScript, melhorando o envolvimento do usuário em 30%. Desenvolve sites otimizados, responsivos e com design em alta no mercado.'),
('UniVS - Centro Universitário Vale do Salgado', 'Frontend Developer', 'Jan 2019 - Jan 2020', 'Desenvolveu sites utilizando React e NextJs. Colaborou com designers UX para implementar designs responsivos');


--skills

INSERT INTO skills (title) VALUES('JavaScript'), ('TypeScript'), ('React'), ('Node.js'), ('Docker'), ('Postgres'), ('TailwindCSS'), ('Remix'), ('Vite'), ('Next.js'), ('Express'), ('Git'), ('Visual Studio Code'), ('Figma');
