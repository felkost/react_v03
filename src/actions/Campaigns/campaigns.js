export function createCampaign(item) {
    return {
        type: 'ACTION_CREATE_CAMPAIGN',
        item
    }
};

export function updateCampaign(item) {
    return {
        type: 'ACTION_UPDATE_CAMPAIGN',
        item
    }
};

export function removeCampaign(id) {
    return {
        type: 'ACTION_REMOVE_CAMPAIGN',
        id
    }
};

export function copyCampaign(item) {
    return {
        type: 'ACTION_COPY_CAMPAIGN',
        item
    }
};