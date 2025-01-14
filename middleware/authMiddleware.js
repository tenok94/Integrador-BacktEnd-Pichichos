const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Acceso denegado. No se proporcionó un token.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded; // Agregamos el usuario decodificado al request
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido.' });
    }
};

module.exports = authMiddleware;