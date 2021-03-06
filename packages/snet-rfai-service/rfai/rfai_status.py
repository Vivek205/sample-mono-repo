from enum import Enum


class ApprovedRequestStatus(Enum):
    ACTIVE = "APPROVED/ACTIVE"
    SOLUTION_VOTE = "APPROVED/SOLUTION_VOTE"
    COMPLETED = "APPROVED/COMPLETED"
    EXPIRED = "APPROVED/EXPIRED"


class OpenRequestStatus(Enum):
    ACTIVE = "OPEN/ACTIVE"
    EXPIRED = "OPEN/EXPIRED"


class RFAIStatusCodes(Enum):
    OPEN = 0
    PENDING = 1000
    OPEN_EXPIRED = 1010
    APPROVED = 1
    ACTIVE = 1110
    SOLUTION_VOTE = 1120
    COMPLETED = 1130
    INCOMPLETE = 1200
    REJECTED = 2
    CLOSED = 4
