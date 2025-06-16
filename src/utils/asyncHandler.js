const asyncHandler = () => {
    return (req, res, next) =>
        {
            const promise = new Promise((resolve, reject) =>
                {
                    // do something
                    resolve();
                    }
                    );
                    promise.then(() =>
                        {
                            // do something
                            next();
                            }
                            ).catch((err) =>
                                {
                                    // do something
                                    res.status(500).send(err);
                                    }
                                    );
                                    };

}
