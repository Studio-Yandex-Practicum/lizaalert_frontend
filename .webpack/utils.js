function mapEnv(envs) {
  const result = Object.entries(envs).reduce((acc, [key, value]) => {
    acc[key] = JSON.stringify(value);
    return acc;
  }, {});
  return result;
}

module.exports = { mapEnv };
