import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubInfo = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    // Função para obter dados do GitHub usando Axios
    const getGitHubData = async () => {
      try {
        const response = await axios.get('https://deploy-wedding.onrender.com/github-info');
        setGithubData(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do GitHub:', error);
      }
    };

    // Chama a função ao montar o componente
    getGitHubData();
  }, []); // O segundo parâmetro [] garante que a função será chamada apenas uma vez, semelhante ao componentDidMount.

  return (
    <div>
      <h2>Dados do GitHub::</h2>
      {githubData ? (
        <pre>{JSON.stringify(githubData, null, 2)}</pre>
      ) : (
        <p>Carregando dados....</p>
      )}
    </div>
  );
};

export default GitHubInfo;
