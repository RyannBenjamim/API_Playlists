const getIndexById = (id, array, message) => {
  const index = array.findIndex((item) => item.id === id);

  if (index === -1) {
    return {
      status: false,
      error: message || "Item não encontrado.",
      code: 404,
    };
  }

  return {
    status: true,
    data: array[index],
    index,
  };
};

const isArray = (data, message) => {
  if (data && Array.isArray(data)) {
    return {
      status: true,
    };
  }

  return {
    status: false,
    error: message || "o dado fornecido não é um array",
    code: 400,
  };
};

const validateVariableType = (variable, type, message) => {
  if (!variable) {
    return {
      status: false,
      error: "Variável não encontrada.",
      code: 404,
    };
  }

  if (typeof variable !== type) {
    return {
      status: false,
      error: message || "Tipo de variável inválida",
      code: 400,
    };
  }

  return {
    status: true,
  };
};

const validateArrayElementsType = (array, type, message) => {
  if (!array) {
    return {
      status: false,
      error: "Array não encontrado.",
      code: 404,
    };
  }

  const arrayValidation = isArray(array);
  if (!arrayValidation.status) {
    return arrayValidation;
  }

  if (array.length > 0) {
    for (let item of array) {
      if (typeof item !== type) {
        return {
          status: false,
          error:
            message ||
            `O array enviado não é composto por elementos do tipo ${type}.`,
          code: 400,
        };
      }
    }
  }

  return {
    status: true,
  };
};

const validateArrayInstancesOfClass = (array, instance, message) => {
  if (!array) {
    return {
      status: false,
      error: "Array não encontrado.",
      code: 404,
    };
  }

  const arrayValidation = isArray(array);
  if (!arrayValidation.status) {
    return arrayValidation;
  }

  if (array.length > 0) {
    for (let item of array) {
      if (!(item instanceof instance)) {
        return {
          status: false,
          error:
            message ||
            `O array enviado não é composto por instâncias da classe ${instance}.`,
          code: 400,
        };
      }
    }
  }

  return {
    status: true,
  };
};

module.exports = {
  getIndexById,
  isArray,
  validateVariableType,
  validateArrayElementsType,
  validateArrayInstancesOfClass,
};
