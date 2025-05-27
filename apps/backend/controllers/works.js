const logger = require('../config/logger');
const Work = require('../models/work');
const fs = require('fs');

exports.getAllWork = (req, res, next) => {
    Work.find()
        .then(works => res.status(200).json(works))
        .catch(error => {
            logger.error(error);
            res.status(400).json({ error });
        });
};

exports.deleteOneWork = (req, res, next) => {
    Work.findOne({ _id: req.params.id })
        .then(work => {
            if (work.userId != req.auth.userId) {
                logger.warn(`User ${req.auth.userId} unauthorized for work ${work._id}`);
                return res.status(401).json({message: 'Not authorized'});
            } else {
                Work.deleteOne({ _id: req.params.id })
                    .then(() => {
                        /* const filename = work.imageUrl.split('/images/')[1];
                        fs.unlink(`images/${filename}`, (err) => { if (err) throw err}); */
                        logger.info(`Work ${work._id} deleted by ${req.auth.userId}`);
                        res.status(200).json({ message: 'Projet supprimé !'});
                    })
                    .catch(error => {
                        logger.error(error);
                        res.status(400).json({ error });
                    })
            }
        })
        .catch( error => {
            logger.error(error);
            res.status(500).json({ error });
        });
};


/* exports.createBook = (req, res, next) => {
    const bookObject = JSON.parse(req.body.book);
    delete bookObject._id;
    delete bookObject._userId;
    const book = new Book({
        ...bookObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        ratings: bookObject.ratings.map((rating, index) =>
            index === 0 ? { ...rating, userId: req.auth.userId } : rating
        ),
    });
    book.save().then(
        () => {
          res.status(201).json({
            message: 'Book saved successfully!'
          });
          logger.info(`Book created by ${req.auth.userId}`)
        }
      ).catch(
        (error) => {
            if (req.file.path) {
                fs.unlinkSync(req.file.path);
                logger.info('The temporary file has been deleted!');
            };
          res.status(400).json({
            error: error
          });
          logger.error(error);
        }
      );
};


exports.modifyBook = (req, res, next) => {
    const bookObject = req.file ? {
        ...JSON.parse(req.body.book),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`    
    } : { ...req.body };

    delete bookObject._userId;

    Book.findOne({ _id: req.params.id})
        .then ((book) => {
            if (book.userId != req.auth.userId) {
                logger.warn(`User ${req.auth.userId} unauthorized for book ${book._id}`);
                return res.status(401).json({ message: 'Not authorized'});
            } else {
                const oldImageUrl = book.imageUrl
                const filename = oldImageUrl.split('/images/')[1];
                Book.updateOne({ _id: req.params.id}, { ...bookObject, _id: req.params.id})
                    .then(() => {
                        if (!bookObject.imageUrl) { 
                            logger.info(`User ${req.auth.userId} modify book ${book._id}`);
                            return res.status(200).json({message: 'Livre modifié!'});
                        }
                        fs.unlink(`images/${filename}`, (err) => { if (err) throw err});
                        logger.info(`User ${req.auth.userId} modify book ${book._id}`);
                        res.status(200).json({message: 'Livre modifié!'})
                    })
                    .catch(error => {
                        logger.error(error);
                        res.status(401).json({ error });
                    });
            }
        })
        .catch((error) => {
            logger.error(error);
            res.status(400).json({ error });
        });
};



exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
        .then(book => res.status(200).json(book))
        .catch(error => {
            logger.error(error);
            res.status(400).json({ error });
        });
}; */