import helloWorld from './HelloWorld.mjs';

async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

messages();
