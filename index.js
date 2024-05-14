const core = require('@actions/core');

try {
    const input = core.getInput('my-input');
    console.log(`My input is ${input}`);
    core.setOutput("my-output", `Hello ${input}`);
} catch (error) { 
    core.setFailed(`Erro: ${error.message}`); 
}