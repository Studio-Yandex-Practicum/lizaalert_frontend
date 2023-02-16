function mapEnv(envs) {
  if (!envs) {
    return {};
  }

  const result = Object.entries(envs).reduce((acc, [key, value]) => {
    acc[key] = JSON.stringify(value);
    return acc;
  }, {});
  return result;
}

module.exports = { mapEnv };
