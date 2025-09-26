const chokidar = require('chokidar');
const { exec } = require('child_process');

// Ruta de tu carpeta local
const WATCH_PATH = 'M:/DFS_AKCAN/AKCAN_Resurtido/0NvoProceso/QUERY';

chokidar.watch(WATCH_PATH, {ignoreInitial:true}).on('all', (event, path) => {
  console.log(`Cambio detectado: ${event} en ${path}`);
  // Ejecuta comandos git para subir cambios a GitHub
  exec('git add . && git commit -m "Auto-sync" && git push', {cwd: WATCH_PATH}, (err, stdout, stderr) => {
    if (err) console.error(stderr);
    else console.log(stdout);
  });
});