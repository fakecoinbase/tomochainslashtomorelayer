class CustomException(Exception):
    status_code = 500
    message = ''

    def __init__(self, detail=''):
        self.detail = detail


class MissingArgumentException(CustomException):
    status_code = 400
    message = 'Missing required attribute(s)'


class NotUniqueException(CustomException):
    status_code = 400
    message = 'Field value is not unique'
